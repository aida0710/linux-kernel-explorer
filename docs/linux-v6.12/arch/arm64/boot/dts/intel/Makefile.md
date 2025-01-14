---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/intel/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
dtb-$(CONFIG_ARCH_INTEL_SOCFPGA) += socfpga_agilex_n6000.dtb \
				socfpga_agilex_socdk.dtb \
				socfpga_agilex_socdk_nand.dtb \
				socfpga_agilex5_socdk.dtb \
				socfpga_n5x_socdk.dtb
dtb-$(CONFIG_ARCH_KEEMBAY) += keembay-evm.dtb

```
