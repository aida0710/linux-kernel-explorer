---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/platform/x86/dell/dell-wmi-sysman/Makefile`

### コンテンツ

```txt
obj-$(CONFIG_DELL_WMI_SYSMAN)  += dell-wmi-sysman.o
dell-wmi-sysman-objs := 	sysman.o		\
				enum-attributes.o	\
				int-attributes.o	\
				string-attributes.o	\
				passobj-attributes.o	\
				biosattr-interface.o	\
				passwordattr-interface.o

```
