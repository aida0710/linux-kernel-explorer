---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/riscv/boot/dts/canaan/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
dtb-$(CONFIG_ARCH_CANAAN) += canaan_kd233.dtb
dtb-$(CONFIG_ARCH_CANAAN) += k210_generic.dtb
dtb-$(CONFIG_ARCH_CANAAN) += sipeed_maix_bit.dtb
dtb-$(CONFIG_ARCH_CANAAN) += sipeed_maix_dock.dtb
dtb-$(CONFIG_ARCH_CANAAN) += sipeed_maix_go.dtb
dtb-$(CONFIG_ARCH_CANAAN) += sipeed_maixduino.dtb

```
