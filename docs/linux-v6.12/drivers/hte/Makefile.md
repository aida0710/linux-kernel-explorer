---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/hte/Makefile`

### コンテンツ

```txt
obj-$(CONFIG_HTE)		+= hte.o
obj-$(CONFIG_HTE_TEGRA194)	+= hte-tegra194.o
obj-$(CONFIG_HTE_TEGRA194_TEST) += hte-tegra194-test.o

```
