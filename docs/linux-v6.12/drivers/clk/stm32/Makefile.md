---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/clk/stm32/Makefile`

### コンテンツ

```txt
obj-$(CONFIG_COMMON_CLK_STM32MP135)	+= clk-stm32mp13.o clk-stm32-core.o reset-stm32.o
obj-$(CONFIG_COMMON_CLK_STM32MP157)	+= clk-stm32mp1.o reset-stm32.o
obj-$(CONFIG_COMMON_CLK_STM32MP257)	+= clk-stm32mp25.o clk-stm32-core.o reset-stm32.o

```
