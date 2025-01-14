---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/bus/mhi/ep/Makefile`

### コンテンツ

```txt
obj-$(CONFIG_MHI_BUS_EP) += mhi_ep.o
mhi_ep-y := main.o mmio.o ring.o sm.o

```
