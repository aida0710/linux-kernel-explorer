---
sidebar_position: 101
---
# sysfs-bus-coresight-devices-trbe

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-bus-coresight-devices-trbe`

### コンテンツ

```txt
What:		/sys/bus/coresight/devices/trbe<cpu>/align
Date:		March 2021
KernelVersion:	5.13
Contact:	Anshuman Khandual <anshuman.khandual@arm.com>
Description:	(Read) Shows the TRBE write pointer alignment. This value
		is fetched from the TRBIDR register.

What:		/sys/bus/coresight/devices/trbe<cpu>/flag
Date:		March 2021
KernelVersion:	5.13
Contact:	Anshuman Khandual <anshuman.khandual@arm.com>
Description:	(Read) Shows if TRBE updates in the memory are with access
		and dirty flag updates as well. This value is fetched from
		the TRBIDR register.

```
