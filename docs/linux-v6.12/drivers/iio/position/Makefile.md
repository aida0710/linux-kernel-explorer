---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/iio/position/Makefile`

### コンテンツ

```txt
#
# Makefile for IIO linear and angular position sensors
#

# When adding new entries keep the list in alphabetical order

obj-$(CONFIG_HID_SENSOR_CUSTOM_INTEL_HINGE) += hid-sensor-custom-intel-hinge.o
obj-$(CONFIG_IQS624_POS)	+= iqs624-pos.o

```
