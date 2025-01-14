---
sidebar_position: 165
---
# sysfs-bus-iio-gyro-bmg160

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-bus-iio-gyro-bmg160`

### コンテンツ

```txt
What:		/sys/bus/iio/devices/triggerX/name = "bmg160-any-motion-devX"
KernelVersion:	3.17
Contact:	linux-iio@vger.kernel.org
Description:
		The BMG160 gyro kernel module provides an additional trigger,
		which sets driver in a mode, where data is pushed to the buffer
		only when there is any motion.

```
