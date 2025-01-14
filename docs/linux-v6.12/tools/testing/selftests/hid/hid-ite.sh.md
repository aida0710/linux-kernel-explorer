---
sidebar_position: 8
---
# hid-ite.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/hid/hid-ite.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# Runs tests for the HID subsystem

export TARGET=test_ite_keyboard.py

bash ./run-hid-tools-tests.sh

```
