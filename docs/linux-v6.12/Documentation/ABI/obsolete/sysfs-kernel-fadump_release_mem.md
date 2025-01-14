---
sidebar_position: 21
---
# sysfs-kernel-fadump_release_mem

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/obsolete/sysfs-kernel-fadump_release_mem`

### コンテンツ

```txt
This ABI is renamed and moved to a new location /sys/kernel/fadump/release_mem.

What:		/sys/kernel/fadump_release_mem
Date:		Feb 2012
Contact:	linuxppc-dev@lists.ozlabs.org
Description:	write only
		This is a special sysfs file and only available when
		the system is booted to capture the vmcore using FADump.
		It is used to release the memory reserved by FADump to
		save the crash dump.

```
