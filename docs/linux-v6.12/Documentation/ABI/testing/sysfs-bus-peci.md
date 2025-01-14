---
sidebar_position: 215
---
# sysfs-bus-peci

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-bus-peci`

### コンテンツ

```txt
What:		/sys/bus/peci/rescan
Date:		July 2021
KernelVersion:	5.18
Contact:	Iwona Winiarska <iwona.winiarska@intel.com>
Description:
		Writing a non-zero value to this attribute will
		initiate scan for PECI devices on all PECI controllers
		in the system.

What:		/sys/bus/peci/devices/<controller_id>-<device_addr>/remove
Date:		July 2021
KernelVersion:	5.18
Contact:	Iwona Winiarska <iwona.winiarska@intel.com>
Description:
		Writing a non-zero value to this attribute will
		remove the PECI device and any of its children.

```
