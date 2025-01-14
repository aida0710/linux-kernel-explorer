---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/thermal/samsung/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Samsung thermal specific Makefile
#
obj-$(CONFIG_EXYNOS_THERMAL)			+= exynos_thermal.o
exynos_thermal-y				:= exynos_tmu.o

```
