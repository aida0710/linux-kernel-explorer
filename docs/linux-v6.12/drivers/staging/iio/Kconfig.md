---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/staging/iio/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Industrial I/O subsystem configuration
#
menu "IIO staging drivers"
	depends on IIO

source "drivers/staging/iio/accel/Kconfig"
source "drivers/staging/iio/adc/Kconfig"
source "drivers/staging/iio/addac/Kconfig"
source "drivers/staging/iio/frequency/Kconfig"
source "drivers/staging/iio/impedance-analyzer/Kconfig"

endmenu

```
