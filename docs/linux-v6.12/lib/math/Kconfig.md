---
sidebar_position: 7
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/lib/math/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config CORDIC
	tristate "CORDIC algorithm"
	help
	  This option provides an implementation of the CORDIC algorithm;
	  calculations are in fixed point. Module will be called cordic.

config PRIME_NUMBERS
	tristate "Simple prime number generator for testing"
	help
	  This option provides a simple prime number generator for test
	  modules.

	  If unsure, say N.

config RATIONAL
	tristate

```
