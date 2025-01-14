---
sidebar_position: 381
---
# sysfs-driver-fsi-master-gpio

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-driver-fsi-master-gpio`

### コンテンツ

```txt
What:           /sys/bus/platform/devices/[..]/fsi-master-gpio/external_mode
Date:           Feb 2018
KernelVersion:  4.17
Contact:        jk@ozlabs.org
Description:
                Controls access arbitration for GPIO-based FSI master. A
		value of 0 (the default) sets normal mode, where the
		driver performs FSI bus transactions, 1 sets external mode,
		where the FSI bus is driven externally (for example, by
		a debug device).

```
