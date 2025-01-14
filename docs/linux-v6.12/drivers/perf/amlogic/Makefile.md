---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/perf/amlogic/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

obj-$(CONFIG_MESON_DDR_PMU) += meson_ddr_pmu_g12.o

meson_ddr_pmu_g12-y	:= meson_ddr_pmu_core.o meson_g12_ddr_pmu.o

```
