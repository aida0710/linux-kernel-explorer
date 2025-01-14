---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/pps/generators/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# PPS generators configuration
#

comment "PPS generators support"

config PPS_GENERATOR_PARPORT
	tristate "Parallel port PPS signal generator"
	depends on PARPORT && BROKEN
	help
	  If you say yes here you get support for a PPS signal generator which
	  utilizes STROBE pin of a parallel port to send PPS signals. It uses
	  parport abstraction layer and hrtimers to precisely control the signal.

```
