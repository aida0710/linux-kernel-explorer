---
sidebar_position: 23
---
# mlme_osdep.h

### ファイル情報

- パス: `linux-v6.12/drivers/staging/rtl8723bs/include/mlme_osdep.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/******************************************************************************
 *
 * Copyright(c) 2007 - 2011 Realtek Corporation. All rights reserved.
 *
 ******************************************************************************/
#ifndef	__MLME_OSDEP_H_
#define __MLME_OSDEP_H_


extern void rtw_init_mlme_timer(struct adapter *padapter);
extern void rtw_os_indicate_disconnect(struct adapter *adapter);
extern void rtw_os_indicate_connect(struct adapter *adapter);
void rtw_os_indicate_scan_done(struct adapter *padapter, bool aborted);
extern void rtw_report_sec_ie(struct adapter *adapter, u8 authmode, u8 *sec_ie);

void rtw_reset_securitypriv(struct adapter *adapter);

#endif	/* _MLME_OSDEP_H_ */

```
