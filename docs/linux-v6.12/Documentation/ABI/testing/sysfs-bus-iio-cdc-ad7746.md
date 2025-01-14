---
sidebar_position: 147
---
# sysfs-bus-iio-cdc-ad7746

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-bus-iio-cdc-ad7746`

### コンテンツ

```txt
What:		/sys/.../iio:deviceX/in_capacitableY_calibbias_calibration
What:		/sys/.../iio:deviceX/in_capacitableY_calibscale_calibration
KernelVersion:	6.1
Contact:	linux-iio@vger.kernel.org
Description:
		Write 1 to trigger a calibration of the calibbias or
		calibscale. For calibscale, a full scale capacitance should
		be connected to the capacitance input and a
		calibscale_calibration then started.  For calibbias see
		the device datasheet section on "capacitive system offset
		calibration".

```
