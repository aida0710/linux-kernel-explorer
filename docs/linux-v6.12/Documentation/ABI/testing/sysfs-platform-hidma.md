---
sidebar_position: 505
---
# sysfs-platform-hidma

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-platform-hidma`

### コンテンツ

```txt
What:		/sys/devices/platform/hidma-*/chid
		/sys/devices/platform/QCOM8061:*/chid
Date:		Dec 2015
KernelVersion:	4.4
Contact:	"Sinan Kaya <okaya@kernel.org>"
Description:
		Contains the ID of the channel within the HIDMA instance.
		It is used to associate a given HIDMA channel with the
		priority and weight calls in the management interface.

```
