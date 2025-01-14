---
sidebar_position: 301
---
# sysfs-class-power-surface

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-class-power-surface`

### コンテンツ

```txt
What:		/sys/class/power_supply/<supply_name>/alarm
Date:		April 2021
KernelVersion:	5.13
Contact:	Maximilian Luz <luzmaximilian@gmail.com>
Description:
		Battery trip point. When the remaining battery capacity crosses this
		value in either direction, the system will be notified and if
		necessary woken.

		Set to zero to clear/disable.

		Access: Read, Write

		Valid values: In micro-Wh or micro-Ah, depending on the power unit
		of the battery

```
