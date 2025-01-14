---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/soc/litex/Kconfig`

### コンテンツ

```txt
# SPDX-License_Identifier: GPL-2.0

menu "Enable LiteX SoC Builder specific drivers"

config LITEX
	bool

config LITEX_SOC_CONTROLLER
	tristate "Enable LiteX SoC Controller driver"
	depends on OF
	depends on HAS_IOMEM
	select LITEX
	help
	  This option enables the SoC Controller Driver which verifies
	  LiteX CSR access and provides common litex_[read|write]*
	  accessors.
	  All drivers that use functions from litex.h must depend on
	  LITEX.

endmenu

```
