---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/platform/x86/intel/int3472/Makefile`

### コンテンツ

```txt
obj-$(CONFIG_INTEL_SKL_INT3472)		+= intel_skl_int3472_discrete.o \
					   intel_skl_int3472_tps68470.o \
					   intel_skl_int3472_common.o
intel_skl_int3472_discrete-y		:= discrete.o clk_and_regulator.o led.o
intel_skl_int3472_tps68470-y		:= tps68470.o tps68470_board_data.o

intel_skl_int3472_common-y		+= common.o

```
