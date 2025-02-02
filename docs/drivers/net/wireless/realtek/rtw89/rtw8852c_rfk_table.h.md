---
sidebar_position: 76
---
# rtw8852c_rfk_table.h

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtw89/rtw8852c_rfk_table.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 OR BSD-3-Clause */
/* Copyright(c) 2019-2022  Realtek Corporation
 */

#ifndef __RTW89_8852C_RFK_TABLE_H__
#define __RTW89_8852C_RFK_TABLE_H__

#include "phy.h"

extern const struct rtw89_rfk_tbl rtw8852c_dack_reload_defs_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_dack_reset_defs_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_dack_reset_defs_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_dack_defs_s0_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_dack_defs_s1_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_drck_defs_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_iqk_rxk_cfg_defs_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_iqk_afebb_restore_defs_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_iqk_afebb_restore_defs_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_read_rxsram_pre_defs_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_read_rxsram_post_defs_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_dpk_mdpd_order0_defs_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_dpk_mdpd_order1_defs_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_dpk_mdpd_order2_defs_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_dpk_mdpd_order3_defs_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_dpk_kip_pwr_clk_on_defs_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_dpk_kip_pwr_clk_off_defs_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_sys_defs_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_sys_defs_2g_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_sys_defs_2g_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_sys_defs_5g_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_sys_defs_5g_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_txpwr_ctrl_bb_defs_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_txpwr_ctrl_bb_defs_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_txpwr_ctrl_bb_he_tb_defs_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_txpwr_ctrl_bb_he_tb_defs_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_dck_defs_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_dck_defs_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_dck_defs_2g_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_dck_defs_2g_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_dck_defs_5g_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_dck_defs_5g_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_set_bbgain_split_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_set_bbgain_split_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_slope_cal_org_defs_2g_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_slope_cal_org_defs_2g_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_slope_cal_org_defs_5g_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_slope_cal_org_defs_5g_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_set_aligk_default_defs_2g_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_set_aligk_default_defs_2g_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_set_aligk_default_defs_5g_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_set_aligk_default_defs_5g_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_set_aligk_default_defs_6g_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_set_aligk_default_defs_6g_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_slope_defs_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_slope_defs_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_run_slope_defs_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_run_slope_defs_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_track_defs_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_track_defs_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_txagc_ofst_mv_avg_defs_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_txagc_ofst_mv_avg_defs_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_enable_defs_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_enable_defs_b_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_disable_defs_a_tbl;
extern const struct rtw89_rfk_tbl rtw8852c_tssi_disable_defs_b_tbl;

#endif

```
