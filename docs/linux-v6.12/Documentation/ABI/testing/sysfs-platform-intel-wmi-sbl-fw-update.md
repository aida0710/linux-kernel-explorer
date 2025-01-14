---
sidebar_position: 511
---
# sysfs-platform-intel-wmi-sbl-fw-update

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-platform-intel-wmi-sbl-fw-update`

### コンテンツ

```txt
What:		/sys/bus/wmi/devices/44FADEB1-B204-40F2-8581-394BBDC1B651/firmware_update_request
Date:		April 2020
KernelVersion:	5.7
Contact:	"Jithu Joseph" <jithu.joseph@intel.com>
Description:
		Allow user space entities to trigger update of Slim
		Bootloader (SBL). This attribute normally has a value
		of 0 and userspace can signal SBL to update firmware,
		on next reboot, by writing a value of 1.
		There are two available states:

		    * 0 -> Skip firmware update while rebooting
		    * 1 -> Attempt firmware update on next reboot

```
