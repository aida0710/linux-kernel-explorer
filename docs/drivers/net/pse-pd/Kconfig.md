---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/pse-pd/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Ethernet Power Sourcing Equipment drivers
#

menuconfig PSE_CONTROLLER
	bool "Ethernet Power Sourcing Equipment Support"
	depends on REGULATOR
	help
	  Generic Power Sourcing Equipment Controller support.

	  If unsure, say no.

if PSE_CONTROLLER

config PSE_REGULATOR
	tristate "Regulator based PSE controller"
	help
	  This module provides support for simple regulator based Ethernet Power
	  Sourcing Equipment without automatic classification support. For
	  example for basic implementation of PoDL (802.3bu) specification.

config PSE_PD692X0
	tristate "PD692X0 PSE controller"
	depends on I2C
	select FW_LOADER
	select FW_UPLOAD
	help
	  This module provides support for PD692x0 regulator based Ethernet
	  Power Sourcing Equipment.

	  To compile this driver as a module, choose M here: the
	  module will be called pd692x0.

config PSE_TPS23881
	tristate "TPS23881 PSE controller"
	depends on I2C
	help
	  This module provides support for TPS23881 regulator based Ethernet
	  Power Sourcing Equipment.

	  To compile this driver as a module, choose M here: the
	  module will be called tps23881.
endif

```
