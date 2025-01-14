---
sidebar_position: 244
---
# sysfs-class-bsr

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-class-bsr`

### コンテンツ

```txt
What:		/sys/class/bsr/bsr*/bsr_size
Date:		Jul, 2008
KernelVersion:	2.6.27
Contact:	Arnd Bergmann <arnd@arndb.de>,
		Greg Kroah-Hartman <gregkh@linuxfoundation.org>
Description:
		(RO) Size of the barrier-synchronization register (BSR)
		register in bytes.

What:		/sys/class/bsr/bsr*/bsr_length
Date:		Jul, 2008
KernelVersion:	2.6.27
Contact:	Arnd Bergmann <arnd@arndb.de>,
		Greg Kroah-Hartman <gregkh@linuxfoundation.org>
Description:
		(RO) The length of memory region that can be mapped in bytes.

What:		/sys/class/bsr/bsr*/bsr_stride
Date:		Jul, 2008
KernelVersion:	2.6.27
Contact:	Arnd Bergmann <arnd@arndb.de>,
		Greg Kroah-Hartman <gregkh@linuxfoundation.org>
Description:
		(RO) The stride or the interval at which the allocated BSR bytes
		repeat within the mapping.

```
