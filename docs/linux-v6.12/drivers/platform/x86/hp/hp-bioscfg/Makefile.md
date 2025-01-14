---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/platform/x86/hp/hp-bioscfg/Makefile`

### コンテンツ

```txt
obj-$(CONFIG_HP_BIOSCFG) := hp-bioscfg.o

hp-bioscfg-objs := bioscfg.o	\
	biosattr-interface.o	\
	enum-attributes.o	\
	int-attributes.o	\
	order-list-attributes.o	\
	passwdobj-attributes.o	\
	spmobj-attributes.o	\
	string-attributes.o	\
	surestart-attributes.o

```
