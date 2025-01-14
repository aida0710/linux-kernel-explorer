---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/bus/mhi/Makefile`

### コンテンツ

```txt
# Host MHI stack
obj-$(CONFIG_MHI_BUS) += host/

# Endpoint MHI stack
obj-$(CONFIG_MHI_BUS_EP) += ep/

```
