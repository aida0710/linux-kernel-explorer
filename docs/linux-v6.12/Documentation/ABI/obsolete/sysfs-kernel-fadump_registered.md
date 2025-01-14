---
sidebar_position: 20
---
# sysfs-kernel-fadump_registered

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/obsolete/sysfs-kernel-fadump_registered`

### コンテンツ

```txt
This ABI is renamed and moved to a new location /sys/kernel/fadump/registered.

What:		/sys/kernel/fadump_registered
Date:		Feb 2012
Contact:	linuxppc-dev@lists.ozlabs.org
Description:	read/write
		Helps to control the dump collect feature from userspace.
		Setting 1 to this file enables the system to collect the
		dump and 0 to disable it.
User:		Kdump service

```
