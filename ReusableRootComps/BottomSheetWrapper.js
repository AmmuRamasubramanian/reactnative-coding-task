import React, { ReactNode, forwardRef, memo, useCallback, useEffect, useMemo, useState } from "react";
import { BackHandler, Keyboard, StyleSheet, Text , View} from "react-native";
import colors from "../colors";
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from "@gorhom/bottom-sheet";
import { Easing } from "react-native-reanimated";
import { Portal } from "@gorhom/portal";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BottomSheetWrapper = forwardRef((props, ref) => {
    const safeArea=useSafeAreaInsets()
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const [index, setIndex]=useState(-1)

    const pressBehavior = useMemo(
      () => (props.dontClose === true ? "none" : "close"),
      [props.dontClose]
    );

    const renderBackdrop = useCallback(
      (backdropProps) => ( 
        <BottomSheetBackdrop
          {...backdropProps}
          disappearsOnIndex={-1} 
          appearsOnIndex={0}     
          pressBehavior={props.dontClose===true ? "none" : "close"}
      
        />
      ),
      [pressBehavior]
    );

    const handleSheetChanges = (index) => {
      setIsBottomSheetOpen(index !== -1);
      setIndex(index)
      if (index === -1 && typeof props.onClose==="function") {
        props.onClose()
      }
    };

    
    useEffect(() => {
      const backAction = () => {
        if (isBottomSheetOpen) {
          ref.current?.dismiss(); 
          return true; 
        }

        return false;
      };

      const keyboardDidshowListener = Keyboard.addListener('keyboardDidShow', () => {});
      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        if (index !== -1) {
          requestAnimationFrame(() => {
           ref.current?.snapToIndex(0)
          });
        }
      });

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction
      );

      return () => {
        backHandler.remove();
        keyboardDidHideListener.remove();
        keyboardDidshowListener.remove()
      }
    }, [isBottomSheetOpen, index])

    return (
      <Portal hostName="BottomsheetWrap">
      <BottomSheetModalProvider> 
      <BottomSheetModal
        ref={ref}
        enableDynamicSizing={true}
        animationConfigs={{
          duration: 400,
          easing: Easing.out(Easing.exp),
        }}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={styles.indicator}
        handleStyle={styles.mainContainer} 
        backgroundStyle={{backgroundColor:colors.veryDrkGreyishBlue}}
        keyboardBlurBehavior="restore"
        keyboardBehavior="interactive"
        enablePanDownToClose={!props.dontClose}
        onChange={handleSheetChanges}
      >
         <BottomSheetView style={styles.container}> 
           {props.children}
           <View style={{marginBottom:safeArea.bottom+ (props.dontAddExtraSpace ? 0 : 30)}}/>
          </BottomSheetView>
      </BottomSheetModal>
      </BottomSheetModalProvider>
      </Portal>
    );
  }
);

export default memo(BottomSheetWrapper);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightWhitish,
    paddingLeft:0,
    paddingRight:0,
    paddingTop:0
  },
  mainContainer: {
    backgroundColor: colors.lightWhitish,
    paddingLeft:0,
    paddingRight:0,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  indicator: {
    alignSelf: "center",
    height: 4,
    width: 55,
    backgroundColor: colors.midDrkBlue,
    marginTop: 5,
    marginBottom: 8,
    borderRadius: 3,
  },
});
