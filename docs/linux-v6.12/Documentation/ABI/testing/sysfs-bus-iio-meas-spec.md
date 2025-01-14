---
sidebar_position: 178
---
# sysfs-bus-iio-meas-spec

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-bus-iio-meas-spec`

### コンテンツ

```txt
What:           /sys/bus/iio/devices/iio:deviceX/battery_low
KernelVersion:  4.1.0
Contact:        linux-iio@vger.kernel.org
Description:
                Reading returns either '1' or '0'. '1' means that the
                battery level supplied to sensor is below 2.25V.
                This ABI is available for tsys02d, htu21, ms8607

```
