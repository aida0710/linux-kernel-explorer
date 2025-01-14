---
sidebar_position: 176
---
# sysfs-bus-iio-light-tsl2772

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-bus-iio-light-tsl2772`

### コンテンツ

```txt
What:		/sys/bus/iio/devices/device[n]/in_illuminance0_calibrate
KernelVersion:	3.3-rc1
Contact:	linux-iio@vger.kernel.org
Description:
		Causes an internal calibration of the als gain trim
		value which is later used in calculating illuminance in lux.

What:		/sys/bus/iio/devices/device[n]/in_proximity0_calibrate
KernelVersion:	3.3-rc1
Contact:	linux-iio@vger.kernel.org
Description:
		Causes a recalculation and adjustment to the
		proximity_thresh_rising_value.

```
