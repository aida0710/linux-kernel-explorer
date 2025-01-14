---
sidebar_position: 7
---
# dec_and_test

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/fallbacks/dec_and_test`

### コンテンツ

```txt
cat <<EOF
	return raw_${atomic}_dec_return(v) == 0;
EOF

```
