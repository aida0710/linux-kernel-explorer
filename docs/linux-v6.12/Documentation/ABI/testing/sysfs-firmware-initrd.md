---
sidebar_position: 438
---
# sysfs-firmware-initrd

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-firmware-initrd`

### コンテンツ

```txt
What:		/sys/firmware/initrd
Date:		December 2023
Contact:	Alexander Graf <graf@amazon.com>
Description:
		When the kernel was booted with an initrd and the
		"retain_initrd" option is set on the kernel command
		line, /sys/firmware/initrd contains the contents of the
		initrd that the kernel was booted with.

```
