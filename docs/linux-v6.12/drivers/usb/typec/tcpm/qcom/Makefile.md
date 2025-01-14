---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/usb/typec/tcpm/qcom/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
obj-$(CONFIG_TYPEC_QCOM_PMIC)		+= qcom_pmic_tcpm.o
qcom_pmic_tcpm-y			+= qcom_pmic_typec.o \
					   qcom_pmic_typec_port.o \
					   qcom_pmic_typec_pdphy.o \
					   qcom_pmic_typec_pdphy_stub.o \

```
