import { StyleSheet, Text, View } from "react-native";
import {
  Button,
  DataTable,
  Title,
  Provider as PaperProvider,
  Divider,
} from "react-native-paper";
import React from "react";
import { Screen } from "expo-router/build/views/Screen";
import useSms from "../hooks/useSms";

const PermissionStatus = ({
  READ_SMS_PERMISSION_STATUS,
  RECEIVE_SMS_PERMISSION_STATUS,
  requestReadSMSPermission,
}: any) => {
  console.log(
    "READ_SMS_PERMISSION_STATUS, RECEIVE_SMS_PERMISSION_STATUS:",
    READ_SMS_PERMISSION_STATUS,
    RECEIVE_SMS_PERMISSION_STATUS
  );
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Permission Status</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>READ_SMS:</DataTable.Cell>
        <DataTable.Cell>
          {READ_SMS_PERMISSION_STATUS + "" || "null"}
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>RECEIVE_SMS:</DataTable.Cell>
        <DataTable.Cell>
          {RECEIVE_SMS_PERMISSION_STATUS + "" || "null"}
        </DataTable.Cell>
      </DataTable.Row>

      {(!READ_SMS_PERMISSION_STATUS || !RECEIVE_SMS_PERMISSION_STATUS) && (
        <Button onPress={requestReadSMSPermission} mode="contained">
          Request Permission
        </Button>
      )}
    </DataTable>
  );
};

export default function Root() {
  const {
    appState,
    buttonClickHandler,
    checkPermissions,
    errorCallbackStatus,
    hasReceiveSMSPermission,
    hasReadSMSPermission,
    requestReadSMSPermission,
    smsPermissionState,
    successCallbackStatus,
    smsMessageBody,
    smsMessageNumber,
    smsError,
  } = useSms();
  return (
    <View>
      <PermissionStatus
        READ_SMS_PERMISSION_STATUS={hasReadSMSPermission}
        RECEIVE_SMS_PERMISSION_STATUS={hasReceiveSMSPermission}
        requestReadSMSPermission={requestReadSMSPermission}
      />
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell>
            <Text>smsPermissionState:</Text>
          </DataTable.Cell>
          <DataTable.Cell>{smsPermissionState + "" || "null"}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <Text>smsMessageNumber:</Text>
          </DataTable.Cell>
          <DataTable.Cell>{smsMessageNumber + "" || "null"}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <Text>smsMessageBody:</Text>
          </DataTable.Cell>
          <DataTable.Cell>{smsMessageBody + "" || "null"}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <Text>smsError:</Text>
          </DataTable.Cell>
          <DataTable.Cell>{smsError + "" || "null"}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({});
