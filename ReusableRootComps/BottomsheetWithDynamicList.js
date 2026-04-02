import React, {
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  BackHandler,
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  View,
} from "react-native";
import colors from "../colors";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetFlashList,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Easing } from "react-native-reanimated";
import { Portal } from "@gorhom/portal";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BottomSheetWithDynamicFlatList = forwardRef((props, ref) => {
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
      />
    ),
    []
  );

  const [index, setIndex] = useState(-1);
  const safeArea = useSafeAreaInsets();

  const snapPoints = useMemo(() => {
    return ["50%"];
  }, []);

  const handleSheetChanges = useCallback(
    (index) => {
      setIndex(index);
      if (index === -1 && typeof props.onClose==="function") {
        props.onClose();
      }
    },
    [props]
  );

  useEffect(() => {
    const backAction = () => {
      const isBottomSheetOpen = index !== -1;
      if (isBottomSheetOpen) {
        ref.current?.close();
        return true;
      }

      return false;
    };
    const keyboardDidshowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {}
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        if (index !== -1) {
          requestAnimationFrame(() => {
           ref.current?.snapToIndex(0)
          });
        }
      }
    );

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => {
      backHandler.remove();
      keyboardDidHideListener.remove();
      keyboardDidshowListener.remove();
    };
  }, [index]);

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
          backgroundStyle={{ backgroundColor: colors.veryDrkGreyishBlue }}
          keyboardBlurBehavior="restore"
          keyboardBehavior="interactive"
          enablePanDownToClose={false}
          onChange={handleSheetChanges} 
          maxDynamicContentSize={props.maxHeight ? props.maxHeight : 500}
          enableHandlePanningGesture={false}
          enableContentPanningGesture={false}
        >
          <BottomSheetView style={styles.container}>
            {props.children}
            {props.showSpace && <View style={{marginBottom:safeArea.bottom+ (props.dontAddExtraSpace ? 0 : 30)}}/>}
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </Portal>
  );
});

export default BottomSheetWithDynamicFlatList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightWhitish,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
  },
  mainContainer: {
    backgroundColor: colors.lightWhitish,
    paddingLeft: 0,
    paddingRight: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
