---
sidebar_position: 144
---
# sysfs-bus-iio-adc-pac1934

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-bus-iio-adc-pac1934`

### コンテンツ

```txt
What:		/sys/bus/iio/devices/iio:deviceX/in_shunt_resistorY
KernelVersion:	6.7
Contact:	linux-iio@vger.kernel.org
Description:
		The value of the shunt resistor may be known only at runtime
		and set by a client application. This attribute allows to
		set its value in micro-ohms. X is the IIO index of the device.
		Y is the channel number. The value is used to calculate
		current, power and accumulated energy.

```
