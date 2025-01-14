---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/thermal/renesas/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

config RCAR_THERMAL
	tristate "Renesas R-Car thermal driver"
	depends on ARCH_RENESAS || COMPILE_TEST
	depends on HAS_IOMEM
	depends on OF
	help
	  Enable this to plug the R-Car thermal sensor driver into the Linux
	  thermal framework.

config RCAR_GEN3_THERMAL
	tristate "Renesas R-Car Gen3 and RZ/G2 thermal driver"
	depends on ARCH_RENESAS || COMPILE_TEST
	depends on HAS_IOMEM
	depends on OF
	help
	  Enable this to plug the R-Car Gen3 or RZ/G2 thermal sensor driver into
	  the Linux thermal framework.

config RZG2L_THERMAL
	tristate "Renesas RZ/G2L thermal driver"
	depends on ARCH_RENESAS || COMPILE_TEST
	depends on HAS_IOMEM
	depends on OF
	help
	  Enable this to plug the RZ/G2L thermal sensor driver into the Linux
	  thermal framework.

```
