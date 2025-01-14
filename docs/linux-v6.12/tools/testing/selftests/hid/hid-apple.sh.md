---
sidebar_position: 5
---
# hid-apple.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/hid/hid-apple.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# Runs tests for the HID subsystem

export TARGET=test_apple_keyboard.py

bash ./run-hid-tools-tests.sh

```
