---
sidebar_position: 201
---
# sysfs-bus-moxtet-devices

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-bus-moxtet-devices`

### コンテンツ

```txt
What:		/sys/bus/moxtet/devices/moxtet-<name>.<addr>/module_description
Date:		March 2019
KernelVersion:	5.3
Contact:	Marek Behún <kabel@kernel.org>
Description:	(Read) Moxtet module description. Format: string

What:		/sys/bus/moxtet/devices/moxtet-<name>.<addr>/module_id
Date:		March 2019
KernelVersion:	5.3
Contact:	Marek Behún <kabel@kernel.org>
Description:	(Read) Moxtet module ID. Format: %x

What:		/sys/bus/moxtet/devices/moxtet-<name>.<addr>/module_name
Date:		March 2019
KernelVersion:	5.3
Contact:	Marek Behún <kabel@kernel.org>
Description:	(Read) Moxtet module name. Format: string

```
