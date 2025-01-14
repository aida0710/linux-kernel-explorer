---
sidebar_position: 372
---
# sysfs-devices-vfio-dev

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-devices-vfio-dev`

### コンテンツ

```txt
What:		 /sys/.../<device>/vfio-dev/vfioX/
Date:		 September 2022
Contact:	 Yi Liu <yi.l.liu@intel.com>
Description:
		 This directory is created when the device is bound to a
		 vfio driver. The layout under this directory matches what
		 exists for a standard 'struct device'. 'X' is a unique
		 index marking this device in vfio.

```
