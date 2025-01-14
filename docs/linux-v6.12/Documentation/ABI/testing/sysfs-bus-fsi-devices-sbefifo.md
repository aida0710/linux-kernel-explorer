---
sidebar_position: 122
---
# sysfs-bus-fsi-devices-sbefifo

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-bus-fsi-devices-sbefifo`

### コンテンツ

```txt
What:		/sys/bus/fsi/devices/XX.XX.00:06/sbefifoX/timeout
KernelVersion:	5.15
Contact:	eajames@linux.ibm.com
Description:
		Indicates whether or not this SBE device has experienced a
		timeout; i.e. the SBE did not respond within the time allotted
		by the driver. A value of 1 indicates that a timeout has
		occurred and no transfers have completed since the timeout. A
		value of 0 indicates that no timeout has occurred, or if one
		has, more recent transfers have completed successfully.

```
