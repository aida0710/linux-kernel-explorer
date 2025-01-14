---
sidebar_position: 134
---
# sysfs-bus-iio-accel-bmc150

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-bus-iio-accel-bmc150`

### コンテンツ

```txt
What:		/sys/bus/iio/devices/triggerX/name = "bmc150_accel-any-motion-devX"
KernelVersion:	3.17
Contact:	linux-iio@vger.kernel.org
Description:
		The BMC150 accelerometer kernel module provides an additional trigger,
		which sets driver in a mode, where data is pushed to the buffer
		only when there is any motion.

```
