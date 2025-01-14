---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/staging/most/dim2/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# MediaLB configuration
#

config MOST_DIM2
	tristate "DIM2"
	depends on HAS_IOMEM && OF

	help
	  Say Y here if you want to connect via MediaLB to network transceiver.
	  This device driver is platform dependent and needs an additional
	  platform driver to be installed. For more information contact
	  maintainer of this driver.

	  To compile this driver as a module, choose M here: the
	  module will be called most_dim2.

```
