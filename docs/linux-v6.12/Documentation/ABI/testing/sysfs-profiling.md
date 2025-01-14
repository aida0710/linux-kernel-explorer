---
sidebar_position: 530
---
# sysfs-profiling

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-profiling`

### コンテンツ

```txt
What:		/sys/kernel/profiling
Date:		September 2008
Contact:	Dave Hansen <dave@linux.vnet.ibm.com>
Description:
		/sys/kernel/profiling is the runtime equivalent
		of the boot-time profile= option.

		You can get the same effect running::

			echo 2 > /sys/kernel/profiling

		as you would by issuing profile=2 on the boot
		command line.

```
