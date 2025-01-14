---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/iio/multiplexer/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Multiplexer drivers
#
# When adding new entries keep the list in alphabetical order

menu "Multiplexers"

config IIO_MUX
	tristate "IIO multiplexer driver"
	select MULTIPLEXER
	help
	  Say yes here to build support for the IIO multiplexer.

	  To compile this driver as a module, choose M here: the
	  module will be called iio-mux.

endmenu

```
