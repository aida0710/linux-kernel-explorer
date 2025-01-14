---
sidebar_position: 17
---
# sysfs-firmware-acpi

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/obsolete/sysfs-firmware-acpi`

### コンテンツ

```txt
What:		/sys/firmware/acpi/hotplug/force_remove
Date:		Mar 2017
Contact:	Rafael J. Wysocki <rafael.j.wysocki@intel.com>
Description:
		Since the force_remove is inherently broken and dangerous to
		use for some hotplugable resources like memory (because ignoring
		the offline failure might lead to memory corruption and crashes)
		enabling this knob is not safe and thus unsupported.

```
