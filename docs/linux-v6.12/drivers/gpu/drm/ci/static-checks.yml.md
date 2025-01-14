---
sidebar_position: 12
---
# static-checks.yml

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/ci/static-checks.yml`

### コンテンツ

```yml
check-patch:
  extends:
    - .build
    - .use-debian/x86_64_build
  script:
    - drivers/gpu/drm/ci/check-patch.py
  variables:
    CHECKPATCH_TYPES: "BAD_SIGN_OFF,BAD_STABLE_ADDRESS_STYLE,COMMIT_COMMENT_SYMBOL,COMMIT_MESSAGE,EMAIL_SUBJECT,FROM_SIGN_OFF_MISMATCH,MISSING_SIGN_OFF,NO_AUTHOR_SIGN_OFF,DIFF_IN_COMMIT_MSG,GERRIT_CHANGE_ID,GIT_COMMIT_ID,UNKNOWN_COMMIT_ID,CODE_INDENT,BIT_MACRO,DOS_LINE_ENDINGS"
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'
      when: on_success
    # Other cases default to never

```
