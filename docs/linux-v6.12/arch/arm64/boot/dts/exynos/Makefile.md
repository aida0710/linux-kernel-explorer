---
sidebar_position: 25
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/exynos/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
subdir-y += google

dtb-$(CONFIG_ARCH_EXYNOS) += \
	exynos5433-tm2.dtb		\
	exynos5433-tm2e.dtb		\
	exynos7-espresso.dtb		\
	exynos7885-jackpotlte.dtb	\
	exynos850-e850-96.dtb		\
	exynosautov9-sadk.dtb		\
	exynosautov920-sadk.dtb

```
