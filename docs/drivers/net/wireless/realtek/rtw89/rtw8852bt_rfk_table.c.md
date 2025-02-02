---
sidebar_position: 60
---
# rtw8852bt_rfk_table.c

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtw89/rtw8852bt_rfk_table.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0 OR BSD-3-Clause
/* Copyright(c) 2024 Realtek Corporation
 */

#include "rtw8852bt_rfk_table.h"

static const struct rtw89_reg5_def rtw8852bt_tssi_sys_defs[] = {
	RTW89_DECL_RFK_WM(0x12a8, 0x0000000f, 0x4),
	RTW89_DECL_RFK_WM(0x32a8, 0x0000000f, 0x4),
	RTW89_DECL_RFK_WM(0x12bc, 0x000ffff0, 0x5555),
	RTW89_DECL_RFK_WM(0x32bc, 0x000ffff0, 0x5555),
	RTW89_DECL_RFK_WM(0x0300, 0xff000000, 0x16),
	RTW89_DECL_RFK_WM(0x0304, 0x000000ff, 0x19),
	RTW89_DECL_RFK_WM(0x0314, 0xffff0000, 0x2041),
	RTW89_DECL_RFK_WM(0x0318, 0xffffffff, 0x2041),
	RTW89_DECL_RFK_WM(0x0318, 0xffffffff, 0x20012041),
	RTW89_DECL_RFK_WM(0x0020, 0x00006000, 0x3),
	RTW89_DECL_RFK_WM(0x0024, 0x00006000, 0x3),
	RTW89_DECL_RFK_WM(0x0704, 0xffff0000, 0x601e),
	RTW89_DECL_RFK_WM(0x2704, 0xffff0000, 0x601e),
	RTW89_DECL_RFK_WM(0x0700, 0xf0000000, 0x4),
	RTW89_DECL_RFK_WM(0x2700, 0xf0000000, 0x4),
	RTW89_DECL_RFK_WM(0x0650, 0x3c000000, 0x0),
	RTW89_DECL_RFK_WM(0x2650, 0x3c000000, 0x0),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_sys_defs);

static const struct rtw89_reg5_def rtw8852bt_tssi_sys_a_defs_2g[] = {
	RTW89_DECL_RFK_WM(0x120c, 0x000000ff, 0x33),
	RTW89_DECL_RFK_WM(0x12c0, 0x0ff00000, 0x33),
	RTW89_DECL_RFK_WM(0x58f8, 0x40000000, 0x1),
	RTW89_DECL_RFK_WM(0x0304, 0x0000ff00, 0x1e),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_sys_a_defs_2g);

static const struct rtw89_reg5_def rtw8852bt_tssi_sys_a_defs_5g[] = {
	RTW89_DECL_RFK_WM(0x120c, 0x000000ff, 0x44),
	RTW89_DECL_RFK_WM(0x12c0, 0x0ff00000, 0x44),
	RTW89_DECL_RFK_WM(0x58f8, 0x40000000, 0x0),
	RTW89_DECL_RFK_WM(0x0304, 0x0000ff00, 0x1d),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_sys_a_defs_5g);

static const struct rtw89_reg5_def rtw8852bt_tssi_sys_b_defs_2g[] = {
	RTW89_DECL_RFK_WM(0x32c0, 0x0ff00000, 0x33),
	RTW89_DECL_RFK_WM(0x320c, 0x000000ff, 0x33),
	RTW89_DECL_RFK_WM(0x78f8, 0x40000000, 0x1),
	RTW89_DECL_RFK_WM(0x0304, 0x0000ff00, 0x1e),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_sys_b_defs_2g);

static const struct rtw89_reg5_def rtw8852bt_tssi_sys_b_defs_5g[] = {
	RTW89_DECL_RFK_WM(0x32c0, 0x0ff00000, 0x44),
	RTW89_DECL_RFK_WM(0x320c, 0x000000ff, 0x44),
	RTW89_DECL_RFK_WM(0x78f8, 0x40000000, 0x0),
	RTW89_DECL_RFK_WM(0x0304, 0x0000ff00, 0x1d),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_sys_b_defs_5g);

static const struct rtw89_reg5_def rtw8852bt_tssi_init_txpwr_defs_a[] = {
	RTW89_DECL_RFK_WM(0x566c, 0x00001000, 0x0),
	RTW89_DECL_RFK_WM(0x5800, 0xffffffff, 0x003f807f),
	RTW89_DECL_RFK_WM(0x580c, 0x0000007f, 0x40),
	RTW89_DECL_RFK_WM(0x580c, 0x0fffff00, 0x00040),
	RTW89_DECL_RFK_WM(0x5810, 0xffffffff, 0x59010000),
	RTW89_DECL_RFK_WM(0x5814, 0x01ffffff, 0x002d000),
	RTW89_DECL_RFK_WM(0x5814, 0xf8000000, 0x00),
	RTW89_DECL_RFK_WM(0x5818, 0xffffffff, 0x002c1800),
	RTW89_DECL_RFK_WM(0x581c, 0x3fffffff, 0x1dc80280),
	RTW89_DECL_RFK_WM(0x5820, 0xffffffff, 0x00002080),
	RTW89_DECL_RFK_WM(0x580c, 0x10000000, 0x1),
	RTW89_DECL_RFK_WM(0x580c, 0x40000000, 0x1),
	RTW89_DECL_RFK_WM(0x5834, 0x3fffffff, 0x000115f2),
	RTW89_DECL_RFK_WM(0x5838, 0x7fffffff, 0x0000121),
	RTW89_DECL_RFK_WM(0x5854, 0x3fffffff, 0x000115f2),
	RTW89_DECL_RFK_WM(0x5858, 0x7fffffff, 0x0000121),
	RTW89_DECL_RFK_WM(0x5860, 0x80000000, 0x0),
	RTW89_DECL_RFK_WM(0x5864, 0x07ffffff, 0x00801ff),
	RTW89_DECL_RFK_WM(0x5898, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x589c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x58a4, 0x000000ff, 0x16),
	RTW89_DECL_RFK_WM(0x58b0, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x58b4, 0x7fffffff, 0x0a002000),
	RTW89_DECL_RFK_WM(0x58b8, 0x7fffffff, 0x00007628),
	RTW89_DECL_RFK_WM(0x58bc, 0x07ffffff, 0x7a7807f),
	RTW89_DECL_RFK_WM(0x58c0, 0xfffe0000, 0x003f),
	RTW89_DECL_RFK_WM(0x58c4, 0xffffffff, 0x0003ffff),
	RTW89_DECL_RFK_WM(0x58c8, 0x00ffffff, 0x000000),
	RTW89_DECL_RFK_WM(0x58c8, 0xf0000000, 0x0),
	RTW89_DECL_RFK_WM(0x58cc, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x58d0, 0x07ffffff, 0x2008101),
	RTW89_DECL_RFK_WM(0x58d4, 0x000000ff, 0x00),
	RTW89_DECL_RFK_WM(0x58d4, 0x0003fe00, 0x0ff),
	RTW89_DECL_RFK_WM(0x58d4, 0x07fc0000, 0x100),
	RTW89_DECL_RFK_WM(0x58d8, 0xffffffff, 0x8008016c),
	RTW89_DECL_RFK_WM(0x58dc, 0x0001ffff, 0x0807f),
	RTW89_DECL_RFK_WM(0x58dc, 0xfff00000, 0xc00),
	RTW89_DECL_RFK_WM(0x58f0, 0x0003ffff, 0x001ff),
	RTW89_DECL_RFK_WM(0x58f4, 0x000fffff, 0x000),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_init_txpwr_defs_a);

static const struct rtw89_reg5_def rtw8852bt_tssi_init_txpwr_defs_b[] = {
	RTW89_DECL_RFK_WM(0x566c, 0x00001000, 0x0),
	RTW89_DECL_RFK_WM(0x7800, 0xffffffff, 0x003f807f),
	RTW89_DECL_RFK_WM(0x780c, 0x0000007f, 0x40),
	RTW89_DECL_RFK_WM(0x780c, 0x0fffff00, 0x00040),
	RTW89_DECL_RFK_WM(0x7810, 0xffffffff, 0x59010000),
	RTW89_DECL_RFK_WM(0x7814, 0x01ffffff, 0x002d000),
	RTW89_DECL_RFK_WM(0x7814, 0xf8000000, 0x00),
	RTW89_DECL_RFK_WM(0x7818, 0xffffffff, 0x002c1800),
	RTW89_DECL_RFK_WM(0x781c, 0x3fffffff, 0x1dc80280),
	RTW89_DECL_RFK_WM(0x7820, 0xffffffff, 0x00002080),
	RTW89_DECL_RFK_WM(0x780c, 0x10000000, 0x1),
	RTW89_DECL_RFK_WM(0x780c, 0x40000000, 0x1),
	RTW89_DECL_RFK_WM(0x7834, 0x3fffffff, 0x000115f2),
	RTW89_DECL_RFK_WM(0x7838, 0x7fffffff, 0x0000121),
	RTW89_DECL_RFK_WM(0x7854, 0x3fffffff, 0x000115f2),
	RTW89_DECL_RFK_WM(0x7858, 0x7fffffff, 0x0000121),
	RTW89_DECL_RFK_WM(0x7860, 0x80000000, 0x0),
	RTW89_DECL_RFK_WM(0x7864, 0x07ffffff, 0x00801ff),
	RTW89_DECL_RFK_WM(0x7898, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x789c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x78a4, 0x000000ff, 0x16),
	RTW89_DECL_RFK_WM(0x78b0, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x78b4, 0x7fffffff, 0x0a002000),
	RTW89_DECL_RFK_WM(0x78b8, 0x7fffffff, 0x00007628),
	RTW89_DECL_RFK_WM(0x78bc, 0x07ffffff, 0x7a7807f),
	RTW89_DECL_RFK_WM(0x78c0, 0xfffe0000, 0x003f),
	RTW89_DECL_RFK_WM(0x78c4, 0xffffffff, 0x0003ffff),
	RTW89_DECL_RFK_WM(0x78c8, 0x00ffffff, 0x000000),
	RTW89_DECL_RFK_WM(0x78c8, 0xf0000000, 0x0),
	RTW89_DECL_RFK_WM(0x78cc, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x78d0, 0x07ffffff, 0x2008101),
	RTW89_DECL_RFK_WM(0x78d4, 0x000000ff, 0x00),
	RTW89_DECL_RFK_WM(0x78d4, 0x0003fe00, 0x0ff),
	RTW89_DECL_RFK_WM(0x78d4, 0x07fc0000, 0x100),
	RTW89_DECL_RFK_WM(0x78d8, 0xffffffff, 0x8008016c),
	RTW89_DECL_RFK_WM(0x78dc, 0x0001ffff, 0x0807f),
	RTW89_DECL_RFK_WM(0x78dc, 0xfff00000, 0xc00),
	RTW89_DECL_RFK_WM(0x78f0, 0x0003ffff, 0x001ff),
	RTW89_DECL_RFK_WM(0x78f4, 0x000fffff, 0x000),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_init_txpwr_defs_b);

static const struct rtw89_reg5_def rtw8852bt_tssi_init_txpwr_he_tb_defs_a[] = {
	RTW89_DECL_RFK_WM(0x58a0, 0xffffffff, 0x000000fe),
	RTW89_DECL_RFK_WM(0x58e4, 0x0000007f, 0x1f),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_init_txpwr_he_tb_defs_a);

static const struct rtw89_reg5_def rtw8852bt_tssi_init_txpwr_he_tb_defs_b[] = {
	RTW89_DECL_RFK_WM(0x78a0, 0xffffffff, 0x000000fe),
	RTW89_DECL_RFK_WM(0x78e4, 0x0000007f, 0x1f),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_init_txpwr_he_tb_defs_b);

static const struct rtw89_reg5_def rtw8852bt_tssi_dck_defs_a[] = {
	RTW89_DECL_RFK_WM(0x580c, 0x0fff0000, 0x000),
	RTW89_DECL_RFK_WM(0x5814, 0x003ff000, 0x0ef),
	RTW89_DECL_RFK_WM(0x5814, 0x18000000, 0x0),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_dck_defs_a);

static const struct rtw89_reg5_def rtw8852bt_tssi_dck_defs_b[] = {
	RTW89_DECL_RFK_WM(0x780c, 0x0fff0000, 0x000),
	RTW89_DECL_RFK_WM(0x7814, 0x003ff000, 0x0ef),
	RTW89_DECL_RFK_WM(0x7814, 0x18000000, 0x0),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_dck_defs_b);

static const struct rtw89_reg5_def rtw8852bt_tssi_dac_gain_defs_a[] = {
	RTW89_DECL_RFK_WM(0x58b0, 0x00000400, 0x1),
	RTW89_DECL_RFK_WM(0x58b0, 0x00000fff, 0x000),
	RTW89_DECL_RFK_WM(0x58b0, 0x00000800, 0x1),
	RTW89_DECL_RFK_WM(0x5a00, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a04, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a08, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a0c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a10, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a14, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a18, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a1c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a20, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a24, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a28, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a2c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a30, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a34, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a38, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a3c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a40, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a44, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a48, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a4c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a50, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a54, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a58, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a5c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a60, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a64, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a68, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a6c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a70, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a74, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a78, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a7c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a80, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a84, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a88, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a8c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a90, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a94, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a98, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5a9c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5aa0, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5aa4, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5aa8, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5aac, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5ab0, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5ab4, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5ab8, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5abc, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5ac0, 0xffffffff, 0x00000000),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_dac_gain_defs_a);

static const struct rtw89_reg5_def rtw8852bt_tssi_dac_gain_defs_b[] = {
	RTW89_DECL_RFK_WM(0x78b0, 0x00000fff, 0x000),
	RTW89_DECL_RFK_WM(0x78b0, 0x00000800, 0x1),
	RTW89_DECL_RFK_WM(0x7a00, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a04, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a08, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a0c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a10, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a14, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a18, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a1c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a20, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a24, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a28, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a2c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a30, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a34, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a38, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a3c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a40, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a44, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a48, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a4c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a50, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a54, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a58, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a5c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a60, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a64, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a68, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a6c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a70, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a74, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a78, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a7c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a80, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a84, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a88, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a8c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a90, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a94, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a98, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7a9c, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7aa0, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7aa4, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7aa8, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7aac, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7ab0, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7ab4, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7ab8, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7abc, 0xffffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7ac0, 0xffffffff, 0x00000000),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_dac_gain_defs_b);

static const struct rtw89_reg5_def rtw8852bt_tssi_slope_a_defs_2g[] = {
	RTW89_DECL_RFK_WM(0x5608, 0x07ffffff, 0x0801008),
	RTW89_DECL_RFK_WM(0x560c, 0x07ffffff, 0x0201020),
	RTW89_DECL_RFK_WM(0x5610, 0x07ffffff, 0x0201008),
	RTW89_DECL_RFK_WM(0x5614, 0x07ffffff, 0x0804008),
	RTW89_DECL_RFK_WM(0x5618, 0x07ffffff, 0x0201008),
	RTW89_DECL_RFK_WM(0x561c, 0x000001ff, 0x008),
	RTW89_DECL_RFK_WM(0x561c, 0xffff0000, 0x0808),
	RTW89_DECL_RFK_WM(0x5620, 0xffffffff, 0x08081e28),
	RTW89_DECL_RFK_WM(0x5624, 0xffffffff, 0x08080808),
	RTW89_DECL_RFK_WM(0x5628, 0xffffffff, 0x08081e28),
	RTW89_DECL_RFK_WM(0x562c, 0x0000ffff, 0x0808),
	RTW89_DECL_RFK_WM(0x581c, 0x00100000, 0x1),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_slope_a_defs_2g);

static const struct rtw89_reg5_def rtw8852bt_tssi_slope_a_defs_5g[] = {
	RTW89_DECL_RFK_WM(0x5608, 0x07ffffff, 0x0201008),
	RTW89_DECL_RFK_WM(0x560c, 0x07ffffff, 0x0201019),
	RTW89_DECL_RFK_WM(0x5610, 0x07ffffff, 0x0201008),
	RTW89_DECL_RFK_WM(0x5614, 0x07ffffff, 0x0201008),
	RTW89_DECL_RFK_WM(0x5618, 0x07ffffff, 0x0201008),
	RTW89_DECL_RFK_WM(0x561c, 0x000001ff, 0x008),
	RTW89_DECL_RFK_WM(0x561c, 0xffff0000, 0x0808),
	RTW89_DECL_RFK_WM(0x5620, 0xffffffff, 0x08081808),
	RTW89_DECL_RFK_WM(0x5624, 0xffffffff, 0x08080808),
	RTW89_DECL_RFK_WM(0x5628, 0xffffffff, 0x08080808),
	RTW89_DECL_RFK_WM(0x562c, 0x0000ffff, 0x0808),
	RTW89_DECL_RFK_WM(0x581c, 0x00100000, 0x1),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_slope_a_defs_5g);

static const struct rtw89_reg5_def rtw8852bt_tssi_slope_b_defs_2g[] = {
	RTW89_DECL_RFK_WM(0x7608, 0x07ffffff, 0x0801008),
	RTW89_DECL_RFK_WM(0x760c, 0x07ffffff, 0x0201020),
	RTW89_DECL_RFK_WM(0x7610, 0x07ffffff, 0x0201008),
	RTW89_DECL_RFK_WM(0x7614, 0x07ffffff, 0x0804008),
	RTW89_DECL_RFK_WM(0x7618, 0x07ffffff, 0x0201008),
	RTW89_DECL_RFK_WM(0x761c, 0x000001ff, 0x008),
	RTW89_DECL_RFK_WM(0x761c, 0xffff0000, 0x0808),
	RTW89_DECL_RFK_WM(0x7620, 0xffffffff, 0x08081e28),
	RTW89_DECL_RFK_WM(0x7624, 0xffffffff, 0x08080808),
	RTW89_DECL_RFK_WM(0x7628, 0xffffffff, 0x08081e28),
	RTW89_DECL_RFK_WM(0x762c, 0x0000ffff, 0x0808),
	RTW89_DECL_RFK_WM(0x781c, 0x00100000, 0x1),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_slope_b_defs_2g);

static const struct rtw89_reg5_def rtw8852bt_tssi_slope_b_defs_5g[] = {
	RTW89_DECL_RFK_WM(0x7608, 0x07ffffff, 0x0201008),
	RTW89_DECL_RFK_WM(0x760c, 0x07ffffff, 0x0201019),
	RTW89_DECL_RFK_WM(0x7610, 0x07ffffff, 0x0201008),
	RTW89_DECL_RFK_WM(0x7614, 0x07ffffff, 0x0201008),
	RTW89_DECL_RFK_WM(0x7618, 0x07ffffff, 0x0201008),
	RTW89_DECL_RFK_WM(0x761c, 0x000001ff, 0x008),
	RTW89_DECL_RFK_WM(0x761c, 0xffff0000, 0x0808),
	RTW89_DECL_RFK_WM(0x7620, 0xffffffff, 0x08081808),
	RTW89_DECL_RFK_WM(0x7624, 0xffffffff, 0x08080808),
	RTW89_DECL_RFK_WM(0x7628, 0xffffffff, 0x08080808),
	RTW89_DECL_RFK_WM(0x762c, 0x0000ffff, 0x0808),
	RTW89_DECL_RFK_WM(0x781c, 0x00100000, 0x1),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_slope_b_defs_5g);

static const struct rtw89_reg5_def rtw8852bt_tssi_align_a_2g_all_defs[] = {
	RTW89_DECL_RFK_WM(0x5604, 0x80000000, 0x1),
	RTW89_DECL_RFK_WM(0x5600, 0x3fffffff, 0x3f2d2721),
	RTW89_DECL_RFK_WM(0x5604, 0x003fffff, 0x010101),
	RTW89_DECL_RFK_WM(0x5630, 0x3fffffff, 0x029f57c0),
	RTW89_DECL_RFK_WM(0x5634, 0x3fffffff, 0x00000077),
	RTW89_DECL_RFK_WM(0x5638, 0x000fffff, 0x00000),
	RTW89_DECL_RFK_WM(0x563c, 0x3fffffff, 0x029f5bc0),
	RTW89_DECL_RFK_WM(0x5640, 0x3fffffff, 0x00000076),
	RTW89_DECL_RFK_WM(0x5644, 0x000fffff, 0x00000),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_align_a_2g_all_defs);

static const struct rtw89_reg5_def rtw8852bt_tssi_align_a_5g1_all_defs[] = {
	RTW89_DECL_RFK_WM(0x5604, 0x80000000, 0x1),
	RTW89_DECL_RFK_WM(0x5600, 0x3fffffff, 0x3f2d2721),
	RTW89_DECL_RFK_WM(0x5604, 0x003fffff, 0x010101),
	RTW89_DECL_RFK_WM(0x5630, 0x3fffffff, 0x007ff3d7),
	RTW89_DECL_RFK_WM(0x5634, 0x3fffffff, 0x00000068),
	RTW89_DECL_RFK_WM(0x5638, 0x000fffff, 0x00000),
	RTW89_DECL_RFK_WM(0x563c, 0x3fffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5640, 0x3fffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5644, 0x000fffff, 0x00000),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_align_a_5g1_all_defs);

static const struct rtw89_reg5_def rtw8852bt_tssi_align_a_5g2_all_defs[] = {
	RTW89_DECL_RFK_WM(0x5604, 0x80000000, 0x1),
	RTW89_DECL_RFK_WM(0x5600, 0x3fffffff, 0x3f2d2721),
	RTW89_DECL_RFK_WM(0x5604, 0x003fffff, 0x010101),
	RTW89_DECL_RFK_WM(0x5630, 0x3fffffff, 0x00a003db),
	RTW89_DECL_RFK_WM(0x5634, 0x3fffffff, 0x00000065),
	RTW89_DECL_RFK_WM(0x5638, 0x000fffff, 0x00000),
	RTW89_DECL_RFK_WM(0x563c, 0x3fffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5640, 0x3fffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5644, 0x000fffff, 0x00000),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_align_a_5g2_all_defs);

static const struct rtw89_reg5_def rtw8852bt_tssi_align_a_5g3_all_defs[] = {
	RTW89_DECL_RFK_WM(0x5604, 0x80000000, 0x1),
	RTW89_DECL_RFK_WM(0x5600, 0x3fffffff, 0x3f2d2721),
	RTW89_DECL_RFK_WM(0x5604, 0x003fffff, 0x010101),
	RTW89_DECL_RFK_WM(0x5630, 0x3fffffff, 0x01101be2),
	RTW89_DECL_RFK_WM(0x5634, 0x3fffffff, 0x00000065),
	RTW89_DECL_RFK_WM(0x5638, 0x000fffff, 0x00000),
	RTW89_DECL_RFK_WM(0x563c, 0x3fffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5640, 0x3fffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x5644, 0x000fffff, 0x00000),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_align_a_5g3_all_defs);

static const struct rtw89_reg5_def rtw8852bt_tssi_align_b_2g_all_defs[] = {
	RTW89_DECL_RFK_WM(0x7604, 0x80000000, 0x1),
	RTW89_DECL_RFK_WM(0x7600, 0x3fffffff, 0x3f2d2721),
	RTW89_DECL_RFK_WM(0x7604, 0x003fffff, 0x010101),
	RTW89_DECL_RFK_WM(0x7630, 0x3fffffff, 0x023f3fb9),
	RTW89_DECL_RFK_WM(0x7634, 0x3fffffff, 0x00000075),
	RTW89_DECL_RFK_WM(0x7638, 0x000fffff, 0x00000),
	RTW89_DECL_RFK_WM(0x763c, 0x3fffffff, 0x01df3fb8),
	RTW89_DECL_RFK_WM(0x7640, 0x3fffffff, 0x00000074),
	RTW89_DECL_RFK_WM(0x7644, 0x000fffff, 0x00000),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_align_b_2g_all_defs);

static const struct rtw89_reg5_def rtw8852bt_tssi_align_b_5g1_all_defs[] = {
	RTW89_DECL_RFK_WM(0x7604, 0x80000000, 0x1),
	RTW89_DECL_RFK_WM(0x7600, 0x3fffffff, 0x3f2d2721),
	RTW89_DECL_RFK_WM(0x7604, 0x003fffff, 0x010101),
	RTW89_DECL_RFK_WM(0x7630, 0x3fffffff, 0x010017e0),
	RTW89_DECL_RFK_WM(0x7634, 0x3fffffff, 0x00000069),
	RTW89_DECL_RFK_WM(0x7638, 0x000fffff, 0x00000),
	RTW89_DECL_RFK_WM(0x763c, 0x3fffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7640, 0x3fffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7644, 0x000fffff, 0x00000),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_align_b_5g1_all_defs);

static const struct rtw89_reg5_def rtw8852bt_tssi_align_b_5g2_all_defs[] = {
	RTW89_DECL_RFK_WM(0x7604, 0x80000000, 0x1),
	RTW89_DECL_RFK_WM(0x7600, 0x3fffffff, 0x3f2d2721),
	RTW89_DECL_RFK_WM(0x7604, 0x003fffff, 0x010101),
	RTW89_DECL_RFK_WM(0x7630, 0x3fffffff, 0x01201fe2),
	RTW89_DECL_RFK_WM(0x7634, 0x3fffffff, 0x00000066),
	RTW89_DECL_RFK_WM(0x7638, 0x000fffff, 0x00000),
	RTW89_DECL_RFK_WM(0x763c, 0x3fffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7640, 0x3fffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7644, 0x000fffff, 0x00000),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_align_b_5g2_all_defs);

static const struct rtw89_reg5_def rtw8852bt_tssi_align_b_5g3_all_defs[] = {
	RTW89_DECL_RFK_WM(0x7604, 0x80000000, 0x1),
	RTW89_DECL_RFK_WM(0x7600, 0x3fffffff, 0x3f2d2721),
	RTW89_DECL_RFK_WM(0x7604, 0x003fffff, 0x010101),
	RTW89_DECL_RFK_WM(0x7630, 0x3fffffff, 0x01602fe5),
	RTW89_DECL_RFK_WM(0x7634, 0x3fffffff, 0x00000068),
	RTW89_DECL_RFK_WM(0x7638, 0x000fffff, 0x00000),
	RTW89_DECL_RFK_WM(0x763c, 0x3fffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7640, 0x3fffffff, 0x00000000),
	RTW89_DECL_RFK_WM(0x7644, 0x000fffff, 0x00000),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_align_b_5g3_all_defs);

static const struct rtw89_reg5_def rtw8852bt_tssi_slope_defs_a[] = {
	RTW89_DECL_RFK_WM(0x5814, 0x00000800, 0x1),
	RTW89_DECL_RFK_WM(0x581c, 0x20000000, 0x1),
	RTW89_DECL_RFK_WM(0x5814, 0x20000000, 0x1),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_slope_defs_a);

static const struct rtw89_reg5_def rtw8852bt_tssi_slope_defs_b[] = {
	RTW89_DECL_RFK_WM(0x7814, 0x00000800, 0x1),
	RTW89_DECL_RFK_WM(0x781c, 0x20000000, 0x1),
	RTW89_DECL_RFK_WM(0x7814, 0x20000000, 0x1),
};

RTW89_DECLARE_RFK_TBL(rtw8852bt_tssi_slope_defs_b);

```
